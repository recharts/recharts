import{R as t}from"./iframe-UaiYvcjH.js";import{R as p}from"./zIndexSlice-8ciJYIbx.js";import{C as m}from"./ComposedChart-B4Fyi5OI.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DollB7bP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7x_Svn9H.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./Layer-DOm2DEtl.js";import"./AnimatedItems-DAGS26Tt.js";import"./Label-D-49EUqg.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./ZIndexLayer-DxXiKzAC.js";import"./useAnimationId-BTJ_iqsG.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./types-CAb7fg-d.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./Curve-DSlq-UJh.js";import"./step-PgNHRHTl.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./graphicalItemSelectors-CqS9UHaD.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
