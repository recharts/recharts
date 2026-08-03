import{R as t}from"./iframe-BvoaHdmy.js";import{R as m}from"./zIndexSlice-Bsr7cBhR.js";import{L as s}from"./LineChart-BUyRK8f7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DRoM9ckZ.js";import{X as l}from"./XAxis-CDpMlutO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQ4zUznN.js";import"./index-B_-FbWrF.js";import"./index-BIiBQ2RS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DcaR1-NP.js";import"./isWellBehavedNumber-BXi0lz-u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtuASqVJ.js";import"./index-b13xllOW.js";import"./index-DeegS3pB.js";import"./renderedTicksSlice-BOmSwCSv.js";import"./axisSelectors-Choe--Hk.js";import"./d3-scale-DHqQWI-P.js";import"./CartesianChart-DoxhMpsB.js";import"./chartDataContext-ChSxK7K-.js";import"./CategoricalChart-B1Q3to5_.js";import"./Layer-NFFKs1EA.js";import"./Curve-B63hJeFK.js";import"./types-Df8Ct0Qg.js";import"./step-8axYNU49.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xGZjbukT.js";import"./Label-DD7tXZFM.js";import"./Text-D4sNDUmz.js";import"./DOMUtils-DEiR2hJy.js";import"./ZIndexLayer-BJa50qFF.js";import"./useAnimationId-CWnbJHBU.js";import"./ActivePoints-BjVwwW5t.js";import"./Dot-BZ0HUF_R.js";import"./RegisterGraphicalItemId-pYDAMd0U.js";import"./ErrorBarContext-Dvj--byz.js";import"./GraphicalItemClipPath-CYhIxWIa.js";import"./SetGraphicalItem-CAucCLNl.js";import"./getRadiusAndStrokeWidthFromDot-C9Rzznad.js";import"./ActiveShapeUtils-DD4sF3hm.js";import"./RechartsThemeContext-w6Fo4fMR.js";import"./CartesianAxis-BTq7uWzR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
