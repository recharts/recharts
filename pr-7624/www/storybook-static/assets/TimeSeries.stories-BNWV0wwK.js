import{R as e}from"./iframe-DQ5pdRpT.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BbDJVinv.js";import{R as h}from"./zIndexSlice-DQojUU3D.js";import{C as g}from"./ComposedChart-4NtsiuE-.js";import{L as x}from"./Line-B8q4YFfc.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CzelId51.js";import{T as V}from"./Tooltip-CTEkWRqt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-9E3w2iOb.js";import"./Layer-BrLbSCb2.js";import"./resolveDefaultProps-C2j2eShk.js";import"./Text-BbwznCj8.js";import"./DOMUtils-3opGu7KJ.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./Label-ogcMQvX_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LAqpTUNY.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./types-DwD8FSIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./throttle-j7vxqIWJ.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./axisSelectors-BLoeM8Ql.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./Curve-Co2BFljk.js";import"./step-BcS8HbZG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bmg4d13Y.js";import"./useAnimationId-Bjim9SiW.js";import"./ActivePoints-DNNEApCY.js";import"./Dot-CSL_Jnkg.js";import"./RegisterGraphicalItemId-gNTwGCiB.js";import"./ErrorBarContext-PCXvp0W_.js";import"./GraphicalItemClipPath-Cbyv8QGz.js";import"./SetGraphicalItem-BopL2iik.js";import"./graphicalItemIdentity-DhpqhoFM.js";import"./ActiveShapeUtils-ZRRc_Clb.js";import"./useElementOffset-DXvuwe-z.js";import"./uniqBy-Ccyf9NaN.js";import"./iteratee-DbAGhbRW.js";import"./Cross-mqWdaTzN.js";import"./Rectangle-BmXaPyvq.js";import"./util-Dxo8gN5i.js";import"./Sector-CZrHPxfX.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
