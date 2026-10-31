import{R as t}from"./iframe-DP_a1dmY.js";import{R as p}from"./zIndexSlice-rjLYhejy.js";import{C as m}from"./ComposedChart-CSr8xtVa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CrTMQZRz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUA_ea65.js";import"./throttle-BChPb-_m.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./RechartsWrapper-B4nQvyyr.js";import"./axisSelectors-DEw1mS80.js";import"./polarAxisSelectors-C8froBOH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CQwtQXkW.js";import"./index-B7p3ZvHO.js";import"./index-BKlw8SLM.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./Layer-CZaWfsGO.js";import"./LabelList-DL3Ydiqu.js";import"./Label-ja-Sj5Q7.js";import"./Text-Dp_r5yDX.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./ActivePoints-DnIoFkEo.js";import"./Dot-FQPok2YB.js";import"./types-CDz_n5r5.js";import"./activeStyles-BV6CK3cL.js";import"./useAnimationId-CFEdeYhu.js";import"./dataEntryStyles-4JNZcrwL.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getRadiusAndStrokeWidthFromDot-BgEfcfUu.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./Curve-BWt9Gc4p.js";import"./step-D5N_P6yo.js";import"./useEffectiveDataKey-D45Rikd2.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
