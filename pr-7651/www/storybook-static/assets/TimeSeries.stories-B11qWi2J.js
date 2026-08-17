import{R as e}from"./iframe-gJmHOoV1.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CL1K5HKB.js";import{R as h}from"./zIndexSlice-SLldW8vD.js";import{C as g}from"./ComposedChart-Cjd81jW2.js";import{L as x}from"./Line-BpslqpXK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-SCvl-fAD.js";import{T as V}from"./Tooltip-jUMNHplV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Byci1LgV.js";import"./Layer-DMyVzZAK.js";import"./resolveDefaultProps-EuD2qw6Y.js";import"./Text-BFMrUcgU.js";import"./DOMUtils-DoteccEu.js";import"./isWellBehavedNumber-C4nB07Ky.js";import"./useBackwardsCompatibleTheme-t9HOmvr9.js";import"./Label-BW3VHSxT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs9adZB_.js";import"./index-BdFJZkPY.js";import"./index-DNgAqdgl.js";import"./types-BsPCKB2-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkFdVLqh.js";import"./throttle-C0HH0ZDc.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-uLgma0gs.js";import"./index-D2MlSgDp.js";import"./index-_1fsdksf.js";import"./axisSelectors-BbNLjq-V.js";import"./CartesianChart-B3NOhLAb.js";import"./chartDataContext-Btj7Fomq.js";import"./CategoricalChart-Bdw8EORd.js";import"./Curve-Dowet-ta.js";import"./step-LqTLA14X.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DO16LAh4.js";import"./useAnimationId-BPNuV2bD.js";import"./ActivePoints-B7JRncTK.js";import"./Dot-RQPmIpyp.js";import"./RegisterGraphicalItemId-ClU1Ba2D.js";import"./ErrorBarContext-Dv7pLviF.js";import"./GraphicalItemClipPath-C8fMELX2.js";import"./SetGraphicalItem-BuXSQ0wS.js";import"./getRadiusAndStrokeWidthFromDot-C6MJNSc7.js";import"./ActiveShapeUtils-D-WSdclC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Y-qWOeHt.js";import"./uniqBy-BvB2bptq.js";import"./iteratee-JebvSegM.js";import"./Cross-KBxHvz6V.js";import"./Rectangle-CbNU9WCQ.js";import"./util-Dxo8gN5i.js";import"./Sector-xoH5dnsu.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};
