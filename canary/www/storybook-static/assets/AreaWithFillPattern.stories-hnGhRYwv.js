import{R as t}from"./iframe-zm2RFiAA.js";import{R as p}from"./zIndexSlice-DqZBLIbU.js";import{C as m}from"./ComposedChart-BtUji9l7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CpH6kD3F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8D1mAr5a.js";import"./index-DYoeUBFv.js";import"./index-C05Q7pAX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DVyNUYq0.js";import"./isWellBehavedNumber-BsUHNZ1L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bnt3Xjg2.js";import"./axisSelectors-D_XgtjC9.js";import"./d3-scale-CIfEmdT5.js";import"./index-Cyz_PThi.js";import"./index-0SlDOcWE.js";import"./renderedTicksSlice-DM7SAuzg.js";import"./index-DpXVo8J4.js";import"./CartesianChart-CZZG3tzb.js";import"./chartDataContext-ChtOwbQ7.js";import"./CategoricalChart-Cc-dXh8l.js";import"./Layer-CBvDM-ZR.js";import"./AnimatedItems-Cn3auVQS.js";import"./Label-Dpn-Rbeg.js";import"./Text-bm4_J_IC.js";import"./DOMUtils-Dj43lFCA.js";import"./useId-DIhnWHEa.js";import"./useBackwardsCompatibleTheme-DTCZ1OkH.js";import"./ZIndexLayer-fVuj_SHP.js";import"./useAnimationId-DbteGMIo.js";import"./ActivePoints-Bo7SycvC.js";import"./Dot-DeAdYXSf.js";import"./types-DQCUIdcv.js";import"./RegisterGraphicalItemId-CFLy-PgK.js";import"./GraphicalItemClipPath-CrDoK_iS.js";import"./SetGraphicalItem-CMYFNCGq.js";import"./getRadiusAndStrokeWidthFromDot-Db_AAYxl.js";import"./ActiveShapeUtils-ClA9znOB.js";import"./Curve-KfMVJIMR.js";import"./step-BBLL9Nmi.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C6EWaBUb.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
