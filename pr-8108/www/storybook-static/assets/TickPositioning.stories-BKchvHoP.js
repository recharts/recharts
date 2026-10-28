import{R as t}from"./iframe-BPaILHrg.js";import{R as m}from"./zIndexSlice-Bmw1fph3.js";import{L as s}from"./LineChart-CFjYsDli.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-cHlCiH4v.js";import{X as l}from"./XAxis-Bp49XRaF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./throttle-B9kMlkpl.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./RechartsWrapper-D7MXGog1.js";import"./axisSelectors-BgmzCmWH.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CvctqLlv.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./Layer-BYN-xjEA.js";import"./Curve-DgfwLhV2.js";import"./types-DUbTKtwp.js";import"./step-D2WZnOIE.js";import"./path-DyVhHtw_.js";import"./LabelList-BA53HbEo.js";import"./Label-r7ey19qR.js";import"./Text-CtKpv6li.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./ActivePoints-BAgIMyf9.js";import"./Dot-Eg6Ew0GK.js";import"./activeStyles-BRvUZ3GA.js";import"./useAnimationId-BDqdHn7D.js";import"./dataEntryStyles-DyygVVmF.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./ErrorBarContext-CUfKSzjm.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getRadiusAndStrokeWidthFromDot-DTWprENN.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./useEffectiveDataKey-Bbwl3GsC.js";import"./CartesianAxis-DqZBHpVR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
