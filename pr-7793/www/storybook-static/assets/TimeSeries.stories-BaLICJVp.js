import{R as e}from"./iframe-DqI8fZWc.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DN7qZjW9.js";import{R as h}from"./zIndexSlice-9oYbhSdQ.js";import{C as g}from"./ComposedChart-C5b2LV09.js";import{L as x}from"./Line-B1PViTKj.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-dm0sSvQ9.js";import{T as V}from"./Tooltip-DIfzN9Q7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BLk0unaa.js";import"./Layer-Ckim_S0G.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./Text-9XM6GnGO.js";import"./DOMUtils-C2uAcB2d.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./Label-B6t_CsQ4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CmCgphBH.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./types-D6uFqDQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./throttle-BTCEGSKU.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DQO3SMEw.js";import"./axisSelectors-Degnf0cl.js";import"./index-DPm6oXEP.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./Curve-BfuijxKL.js";import"./step-CpsUov4P.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-rYif9Enh.js";import"./useAnimationId-sXalVax-.js";import"./ActivePoints-BpZWKXXH.js";import"./Dot-D3i3k8Cq.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./ErrorBarContext-CkD9Qczk.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./getRadiusAndStrokeWidthFromDot-Bz_0HqQj.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";import"./useElementOffset-BmnmgRHV.js";import"./uniqBy-D9j1xmZr.js";import"./iteratee-Dfs9TkuY.js";import"./Cross-D9YNJK_K.js";import"./Rectangle-scNawCgP.js";import"./util-Dxo8gN5i.js";import"./Sector-CYr5d1sJ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
