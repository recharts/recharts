import{R as e}from"./iframe-3XHGwrzY.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DAbWxmV3.js";import{R as h}from"./zIndexSlice-Brmhs58T.js";import{C as g}from"./ComposedChart-3w0CXkas.js";import{L as x}from"./Line-CZeg6v99.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DC4T9Y5K.js";import{T as V}from"./Tooltip-DQGZOZkM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-rPfnZIs4.js";import"./Layer-Cs_-jK6s.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./Label-DV0q5jx7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DX_jscyS.js";import"./throttle-CcufCSOD.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-0sscf7qw.js";import"./RechartsWrapper-DFT9i2CK.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./path-DyVhHtw_.js";import"./LabelList-KPZxqPb8.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./activeStyles-Pcudkpr-.js";import"./useAnimationId-9M90yRIF.js";import"./dataEntryStyles-DQz1PP-z.js";import"./fillDefinitions-Czp8LH37.js";import"./themeFill-BM4c2Gyu.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./ErrorBarContext-N4SBTIIF.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./useElementOffset-B4umSDLo.js";import"./uniqBy-B1y1vTmS.js";import"./iteratee-P6PZZRrs.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CcizPSQC.js";import"./Rectangle-BvFpd_DO.js";import"./util-Dxo8gN5i.js";import"./Sector-B8S12vxL.js";const zt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Gt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Gt as __namedExportsOrder,zt as default};
