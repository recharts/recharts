import{R as e}from"./iframe-UaiYvcjH.js";import{R as c}from"./zIndexSlice-8ciJYIbx.js";import{C as d}from"./ComposedChart-B4Fyi5OI.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DollB7bP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7x_Svn9H.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./Layer-DOm2DEtl.js";import"./AnimatedItems-DAGS26Tt.js";import"./Label-D-49EUqg.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./ZIndexLayer-DxXiKzAC.js";import"./useAnimationId-BTJ_iqsG.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./types-CAb7fg-d.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./Curve-DSlq-UJh.js";import"./step-PgNHRHTl.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./graphicalItemSelectors-CqS9UHaD.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
