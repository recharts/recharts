import{R as e}from"./iframe-BCtefvpd.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DRnpS9Qy.js";import{R as h}from"./zIndexSlice-DLtTjfC4.js";import{C as g}from"./ComposedChart-B-FcUFTM.js";import{L as x}from"./Line-DA0OD4w1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CVyajGd1.js";import{T as V}from"./Tooltip-DUz44eR_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DFMRZS9d.js";import"./CartesianAxis-CgS78KcM.js";import"./Layer-sJOcNnwh.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./Label-CC74cj4o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DEcD4grM.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./types-Cdi5Da9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kBir8HDa.js";import"./immer-DIhiteEo.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./axisSelectors-DOKBLmJM.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./Curve-Du81AbUE.js";import"./step-trh3ABoh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8IovmVa.js";import"./useAnimationId-Bcchcs5m.js";import"./string-B6fdYHAA.js";import"./ActivePoints-B96wLJJz.js";import"./Dot-B9o-wKF1.js";import"./RegisterGraphicalItemId-6mFWr6Iy.js";import"./ErrorBarContext-Cvn2xdUy.js";import"./GraphicalItemClipPath-B0sf68Y7.js";import"./SetGraphicalItem-DFYwZ-xH.js";import"./getRadiusAndStrokeWidthFromDot-w6-BSgwG.js";import"./ActiveShapeUtils-4S977V9W.js";import"./useElementOffset-wN2BygXD.js";import"./uniqBy-Cj5mgadw.js";import"./iteratee-BlUr9JAT.js";import"./Cross-De22kgZF.js";import"./Rectangle-LhiWNSwp.js";import"./Sector-BL5iQ8kE.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
