import{e}from"./iframe-C1XJGX3t.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-F1KgXCzm.js";import{R as y}from"./arrayEqualityCheck-BpeTDNly.js";import{C as g}from"./ComposedChart-lM7HGj1N.js";import{L as x}from"./Line-CdDOB73K.js";import{R as S}from"./RechartsHookInspector-GAphqeRz.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DfhtN67L.js";import{T as V}from"./Tooltip-C1sK7C4M.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CUdmmf-V.js";import"./Layer-Dk6O6-C9.js";import"./resolveDefaultProps-DoOIdNyO.js";import"./Text-CHym7YYQ.js";import"./DOMUtils-PN4-Wh3o.js";import"./Label-B-UiuQeI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-f3tuaVy9.js";import"./zIndexSlice-YaBRx6kS.js";import"./immer-DdA_cEFp.js";import"./types-BO06-FVT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ROonkpc2.js";import"./hooks-DkyxLj8R.js";import"./axisSelectors-0L8Hl7-Q.js";import"./RechartsWrapper-Jcx6MylA.js";import"./index-BMIXdyLv.js";import"./CartesianChart-DfX14VSl.js";import"./chartDataContext-COU-oqyF.js";import"./CategoricalChart-B6tCsX7-.js";import"./ReactUtils-DetlFOn3.js";import"./ActivePoints-CpaNcRJG.js";import"./Dot-CY448ZsK.js";import"./RegisterGraphicalItemId-brpvqGPp.js";import"./ErrorBarContext-DDoiyoEo.js";import"./GraphicalItemClipPath-BPrExOyo.js";import"./SetGraphicalItem-VIgAq4Q4.js";import"./useAnimationId-Bi2kUagW.js";import"./getRadiusAndStrokeWidthFromDot-wpqoSr7D.js";import"./ActiveShapeUtils-C4hn4FRv.js";import"./isPlainObject-NaqmG00y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DhXh8lWP.js";import"./Trapezoid-CN-9c4Ka.js";import"./Sector-CK40XgG2.js";import"./Symbols-DjZQJjpC.js";import"./symbol-BPY5wxKC.js";import"./step-BSNAUXbk.js";import"./Curve-B6o2gEbs.js";import"./index-FCQIpD8D.js";import"./ChartSizeDimensions-B31rA8_p.js";import"./OffsetShower-bDh9UTlF.js";import"./PlotAreaShower-ByyJWnzF.js";import"./useElementOffset-B9PeTQil.js";import"./uniqBy-CnQjPYor.js";import"./iteratee-FcCCYeqO.js";import"./Cross-BJyfnACz.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
