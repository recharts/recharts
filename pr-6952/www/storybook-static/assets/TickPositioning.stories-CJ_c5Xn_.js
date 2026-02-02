import{e as t}from"./iframe-Ct3-EmvQ.js";import{R as s}from"./arrayEqualityCheck-6IWQNVnF.js";import{L as m}from"./LineChart-DBIczZSa.js";import{L as c}from"./Line-BFQpRJy0.js";import{X as d}from"./XAxis-BUqB6c6n.js";import{R as l}from"./RechartsHookInspector-CNP9TKyO.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CLCYDClS.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./hooks-PlM3qON0.js";import"./axisSelectors-CMJXMyjC.js";import"./zIndexSlice-DuEz9NCx.js";import"./CartesianChart-DTOqEhzT.js";import"./chartDataContext-mVWnipwc.js";import"./CategoricalChart-DnvqP6Kl.js";import"./Layer-B8MEBogB.js";import"./ReactUtils-DN8_9Eno.js";import"./Label-DHx5gLtP.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./ZIndexLayer-BPGi17AG.js";import"./ActivePoints-BWNwZRYi.js";import"./Dot-CFdq7_VN.js";import"./types-_oa_IGij.js";import"./RegisterGraphicalItemId-XVqhZVps.js";import"./ErrorBarContext-DASfBuRX.js";import"./GraphicalItemClipPath-m8qPdP4H.js";import"./SetGraphicalItem-DB0AUuOj.js";import"./useAnimationId-BJitn0wZ.js";import"./getRadiusAndStrokeWidthFromDot-CQkE4Z1f.js";import"./ActiveShapeUtils-BFvFZr_D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOfd_qYz.js";import"./Trapezoid-DB54BMON.js";import"./Sector-C0TYwl3N.js";import"./Symbols-Bp94E4fO.js";import"./Curve-C_yJ7Ryc.js";import"./CartesianAxis-C_XdVR0m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CtF0TcD5.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
