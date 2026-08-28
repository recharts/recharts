import{R as t}from"./iframe-CIwxHuVP.js";import{R as n}from"./zIndexSlice-4cOqtSJ1.js";import{L as s}from"./LineChart-Ex0lUY6d.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-JFyqB5U2.js";import{X as l}from"./XAxis-CIHUnpyu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DyeZ31Gg.js";import"./index-DYcgeWKW.js";import"./index-BBY9vn-H.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqjvsCVB.js";import"./isWellBehavedNumber-DnH2FQ7z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-saup7v4_.js";import"./axisSelectors-YcB3o8_5.js";import"./d3-scale-BsCK15DF.js";import"./index-Dret-drz.js";import"./index-KtvOjFJW.js";import"./renderedTicksSlice-BymeN3Gd.js";import"./index-CgMi-XQz.js";import"./CartesianChart-BuIzZkiF.js";import"./chartDataContext-BnEwWcTU.js";import"./CategoricalChart-BsI6BCbz.js";import"./Layer-QH0nRmzc.js";import"./Curve-ByjfkPmA.js";import"./types-CaxJYW3v.js";import"./step-CKl1-sZu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJSCuTfT.js";import"./Label-P76xZGuB.js";import"./Text-DdeI7QFK.js";import"./DOMUtils-DJmg_ALb.js";import"./useId-CvnBUwAn.js";import"./useBackwardsCompatibleTheme-CaEtd9Gi.js";import"./ZIndexLayer-DSlR-fbE.js";import"./useAnimationId-CRxHEUg9.js";import"./ActivePoints-DbUUlzxv.js";import"./Dot-USLgQRMp.js";import"./RegisterGraphicalItemId-Bx9h1qwh.js";import"./ErrorBarContext-BBpfpkXa.js";import"./GraphicalItemClipPath-DfR7F3pr.js";import"./SetGraphicalItem-DCJicVim.js";import"./getRadiusAndStrokeWidthFromDot-CxoI2rZS.js";import"./ActiveShapeUtils-C_X8XuiV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D27Sw88P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
