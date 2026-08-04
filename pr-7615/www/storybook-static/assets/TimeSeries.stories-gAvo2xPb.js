import{R as e}from"./iframe-BpT5bjyP.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D1H3iiMu.js";import{R as h}from"./zIndexSlice-6ZjUmd8N.js";import{C as g}from"./ComposedChart-VG8L4Dm0.js";import{L as x}from"./Line-DAOOXY1c.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CxG8NgTa.js";import{T as V}from"./Tooltip-DKBl8YHf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-3XWkAM0R.js";import"./Layer-JsFzk0bC.js";import"./resolveDefaultProps-DDabcDAr.js";import"./Text-HFJbCo1I.js";import"./DOMUtils-DLC4sCDo.js";import"./isWellBehavedNumber-C47drcC6.js";import"./Label-BW7muwsN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeMfDg3A.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./types-TjqF4iRF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DruWQWhq.js";import"./throttle-DrtrRvnQ.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./axisSelectors-DSgRntKH.js";import"./CartesianChart-BHxGC6l9.js";import"./chartDataContext-vyuuOWQ4.js";import"./CategoricalChart-B5HQoLMh.js";import"./Curve-BfRxDj3b.js";import"./step-BYJgq2pg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJc5QMM0.js";import"./useAnimationId-C2b5i1-K.js";import"./ActivePoints-C2xP28N-.js";import"./Dot-C23HV8Lj.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./ErrorBarContext-DwESbJwv.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./graphicalItemIdentity-N_badT-U.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./useElementOffset-Cr8-5ClZ.js";import"./uniqBy-B00lS2JO.js";import"./iteratee-DXhAWmJ8.js";import"./Cross-Cp8Y5M1B.js";import"./Rectangle-CHZg89XO.js";import"./util-Dxo8gN5i.js";import"./Sector-CNKHsTkm.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
