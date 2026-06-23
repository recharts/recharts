import{R as e}from"./iframe-BlvZN_ps.js";import{R as c}from"./zIndexSlice-D5hgUm6A.js";import{C as d}from"./ComposedChart--jP60YbA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bm5LCRi0.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CGkt0g8p.js";import"./index-gQ6L8YEG.js";import"./index-DqSoJz4u.js";import"./get-ChlOH98w.js";import"./resolveDefaultProps-BSk6HMjY.js";import"./isWellBehavedNumber-D-GNZTzD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZiKfiby.js";import"./index-DM8R45IP.js";import"./index-Q4Uh5SEe.js";import"./renderedTicksSlice-D8ZDt7ph.js";import"./axisSelectors-oNKIzGeo.js";import"./d3-scale-D-SQjsd3.js";import"./CartesianChart-Czz_wvXV.js";import"./chartDataContext-hk4GvDfq.js";import"./CategoricalChart-JZ4zyfB8.js";import"./Layer-BGC4J_xD.js";import"./AnimatedItems-CK8w4tlK.js";import"./Label-DWRV51vs.js";import"./Text-iORmPHTw.js";import"./DOMUtils-CsRoe294.js";import"./ZIndexLayer-BWby1RF4.js";import"./useAnimationId-FA58Q0Bf.js";import"./ActivePoints-DBXxGTLr.js";import"./Dot-Do_OPL_B.js";import"./types-DQZAaZ_X.js";import"./RegisterGraphicalItemId-r44ao9oh.js";import"./GraphicalItemClipPath-B9V208TL.js";import"./SetGraphicalItem-DGuU9f1e.js";import"./getRadiusAndStrokeWidthFromDot-sYFWnDzD.js";import"./ActiveShapeUtils-D8MF483E.js";import"./Curve-Bcq56GGu.js";import"./step-Cd6fl88T.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bmu143Am.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
