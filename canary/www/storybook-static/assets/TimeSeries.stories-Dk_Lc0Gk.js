import{R as e}from"./iframe-C0aK3mAR.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-oAoSo46I.js";import{R as h}from"./zIndexSlice-CaqKW8u4.js";import{C as g}from"./ComposedChart-Bb9qF-bw.js";import{L as x}from"./Line-YVyFfETe.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B_djSwnK.js";import{T as V}from"./Tooltip-C5OWskP-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CUkLyyeh.js";import"./Layer-CagqC790.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./Text-sM2vj8c3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./Label-DrUlGLQ7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CptuzTw1.js";import"./throttle-Csdh9d4D.js";import"./types-CmOm39qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D_X7VOsT.js";import"./RechartsWrapper-D12_Reb0.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./Curve-OWEMFZrc.js";import"./step-BYip5hLG.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-cRuikTAi.js";import"./ActivePoints-BHO4PoXJ.js";import"./Dot-C9rBqPl7.js";import"./activeStyles-D8lDViyk.js";import"./useAnimationId-sv0XuVET.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./ErrorBarContext-zrW_wYS_.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getRadiusAndStrokeWidthFromDot-QbS_nSQ9.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./useEffectiveDataKey-C4GReELG.js";import"./useElementOffset-Bd-Smj9e.js";import"./uniqBy-BgGQ3Z2O.js";import"./iteratee-BXSX8eL-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-PSRIh47R.js";import"./Rectangle-D2OQ5a3O.js";import"./util-Dxo8gN5i.js";import"./Sector-C1PqGwtk.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
