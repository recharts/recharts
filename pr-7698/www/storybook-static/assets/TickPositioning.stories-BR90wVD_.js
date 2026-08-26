import{R as t}from"./iframe-zaa1iZav.js";import{R as n}from"./zIndexSlice-BWWEcbGp.js";import{L as s}from"./LineChart-ir5wyAOY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dy42oF7S.js";import{X as l}from"./XAxis-BVnwJxOu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CPqxLIQd.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./axisSelectors-ucT8kUEv.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./CategoricalChart-DzU0tABe.js";import"./Layer-Diqr5-jO.js";import"./Curve-PUx2QnOd.js";import"./types-DFArERnY.js";import"./step-Bfrhe9AG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O1YgZXLs.js";import"./Label-dEEe5X5F.js";import"./Text-CNT20nWc.js";import"./DOMUtils-CDT7WRtk.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./useAnimationId-B8kms9uE.js";import"./ActivePoints-DVBi-AIt.js";import"./Dot-oGoSOzAY.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getRadiusAndStrokeWidthFromDot-DJ1u3-OH.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BEMiFdQK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
