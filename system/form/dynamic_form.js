$(document).ready(function(){
    function addNewChoiceInput() {
        $ret = '';
        $ret += "<div class='form-group has-warning has-feedback'>";
            $ret += "<label class='col-sm-2 control-label'>Tipo</label>";
            $ret += "<div class='col-sm-4'>";
                $ret += "<select id='s2_with_tag' multiple='multiple' class='populate placeholder'>";
                    $ret += "<option>Checkbox</option>";
                    $ret += "<option>Color</option>";
                    $ret += "<option>Date</option>";
                    $ret += "<option>Date-Time</option>";
                    $ret += "<option>Email</option>";
                    $ret += "<option>Number</option>";
                    $ret += "<option>Radio</option>";
                    $ret += "<option>Range</option>";
                    $ret += "<option>Tel</option>";
                    $ret += "<option>text</option>";
                    $ret += "<option>Time</option>";
                    $ret += "<option>Url</option>";
                    $ret += "<option>Week</option>";
                $ret += "</select>";
            $ret += "</div>";
        $ret += "</div>";
        return $ret
    }

    function addNewInput(this) {
        
    }



    <div class="form-group has-warning has-feedback">
        <label class="col-sm-2 control-label">Estado civil</label>
        <div class="col-sm-4">
            <select id="s2_with_tag" multiple="multiple" class="populate placeholder">
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Separado</option>
                <option>Divorciado</option>
                <option>Viúvo</option>
            </select>
        </div>
    </div>
});
