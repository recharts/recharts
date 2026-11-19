import{R as e}from"./iframe-Cr4SLAPG.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B99-G5ow.js";import{R as h}from"./zIndexSlice-DyLLhom_.js";import{C as g}from"./ComposedChart-fx4m_TFy.js";import{L as x}from"./Line-DD5o7CZ0.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-WAvM56kv.js";import{T as V}from"./Tooltip-CsROmNti.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Ds5qTBHM.js";import"./Layer-CWQ0f2zH.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./Text-BBE8dgLe.js";import"./ZIndexLayer-B4fE1k7j.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./Label-iIhWQC5W.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./throttle-m67LhZgN.js";import"./types-B6oZtPsa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DrKqMaOQ.js";import"./RechartsWrapper-BMMPlSoi.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./getRadiusAndStrokeWidthFromDot-D9aaECN7.js";import"./Curve-DJrcdmOM.js";import"./step-B4BPIBfx.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-IfVv-8UK.js";import"./ActivePoints-DnQ4FUYw.js";import"./Dot-BK-ZVoey.js";import"./activeStyles-aUydRVRE.js";import"./useAnimationId-kAVaPV6O.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./ErrorBarContext-6e7pSH1e.js";import"./SetGraphicalItem-C9um0bAO.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./useElementOffset-CHpDveFz.js";import"./uniqBy-BO6YYRyn.js";import"./iteratee-DQY9n11K.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CQya_HrI.js";import"./Rectangle-PLu_R94q.js";import"./util-Dxo8gN5i.js";import"./Sector-Deoj3i-T.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
