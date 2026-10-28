import{R as e}from"./iframe-DbrRN1n8.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D4Dr_tjl.js";import{R as h}from"./zIndexSlice-Du0Au1R-.js";import{C as g}from"./ComposedChart-BwB9uQDU.js";import{L as x}from"./Line-C6WqqYHN.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DUENC00q.js";import{T as V}from"./Tooltip-C7nLXyTl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BCK1OBBy.js";import"./Layer-Do_lw1Xj.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./Text-WfDu__TP.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./Label-A7WyPB0I.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D77BuFKC.js";import"./throttle-DUdTYHJ7.js";import"./types-DkNvVUMM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DK6uFkxV.js";import"./RechartsWrapper-DlyIgJor.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./Curve-CoHdM9Ch.js";import"./step-I4MYWlIC.js";import"./path-DyVhHtw_.js";import"./LabelList-BgsnBCM1.js";import"./ActivePoints-BRaVZy1t.js";import"./Dot-CwOWQR4j.js";import"./activeStyles-BV7TfXze.js";import"./useAnimationId-CvK-4pcw.js";import"./dataEntryStyles-CKR3qDl0.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getRadiusAndStrokeWidthFromDot-GpKWvG3K.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./useElementOffset-CTE_e8_t.js";import"./uniqBy-KNYEdHaO.js";import"./iteratee-Dv9in7l7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DFNkfyvS.js";import"./Rectangle-3NP_NJyH.js";import"./util-Dxo8gN5i.js";import"./Sector-qqHQzkjF.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
