import{R as e}from"./iframe-Xn2MpEZO.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BfvOUMD4.js";import{R as h}from"./zIndexSlice-Ci7uKtqk.js";import{C as g}from"./ComposedChart-B-mMwZkB.js";import{L as x}from"./Line-mdDjoSBv.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BhQeBFLV.js";import{T as V}from"./Tooltip-ZVdfnJ5l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-a5GlobPr.js";import"./CartesianAxis-Ci5XT6aX.js";import"./Layer-DSBtIc_n.js";import"./resolveDefaultProps-ComQIB2r.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./Label-Drk02YPI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rkhqqfVD.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./types-BkUFHbYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./immer-Df9E9w07.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./axisSelectors-N1yg_9bS.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./Curve-DX9_0-tw.js";import"./step-DkdplZJs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-AezG2GF8.js";import"./useAnimationId-Dddlhxb8.js";import"./ActivePoints-Du0eECBh.js";import"./Dot-BgDetyZ9.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./ErrorBarContext-C0h6VuZc.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getRadiusAndStrokeWidthFromDot-CWaP50r6.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./useElementOffset-Byrz6AYu.js";import"./uniqBy-BTijv5vR.js";import"./iteratee-kQQ-_etq.js";import"./Cross-BxiQs5Fm.js";import"./Rectangle-BNtGtL1T.js";import"./util-Dxo8gN5i.js";import"./Sector-C3_M6Ao2.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
