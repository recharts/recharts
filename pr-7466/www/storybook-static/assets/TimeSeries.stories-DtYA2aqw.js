import{R as e}from"./iframe-D8_PwwQn.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BMXTihse.js";import{R as h}from"./zIndexSlice-D3hIREVO.js";import{C as g}from"./ComposedChart-DWabK0Ov.js";import{L as x}from"./Line-Dtm97aFG.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B_gxMkbZ.js";import{T as V}from"./Tooltip-BWwWiBy3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VOiq-nzz.js";import"./CartesianAxis-AGoux6hi.js";import"./Layer-DIbVHc_A.js";import"./resolveDefaultProps-CDlH06hb.js";import"./Text-Dcw4f9im.js";import"./DOMUtils-BuLBbKXn.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./Label-DYAIx6Pc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dhl_4keR.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./types-C59kAQfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./immer-B4u9UiQz.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./axisSelectors-GpzB0aa8.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./Curve-BnWchyuA.js";import"./step-ebfpa1zR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bi3B25M2.js";import"./useAnimationId-BP5XfAv2.js";import"./string-B6fdYHAA.js";import"./ActivePoints-C2Pj95p4.js";import"./Dot-BJ21P9KG.js";import"./RegisterGraphicalItemId-I3cDOhkS.js";import"./ErrorBarContext-uaJHV0aS.js";import"./GraphicalItemClipPath-DA-AqBBR.js";import"./SetGraphicalItem-Clhc-wET.js";import"./getRadiusAndStrokeWidthFromDot-B9utXb_M.js";import"./ActiveShapeUtils-TdP-NoHF.js";import"./useElementOffset-CXqerjyX.js";import"./uniqBy-DiyPPqVx.js";import"./iteratee-DoFufU5s.js";import"./Cross-DzzeZn6L.js";import"./Rectangle-DIl7exJy.js";import"./Sector-CqYmo_YS.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
