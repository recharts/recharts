import{R as e}from"./iframe-BNn_UWWx.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DzOTQwY3.js";import{R as h}from"./zIndexSlice-DE7GeAH-.js";import{C as g}from"./ComposedChart-iCBZpoeK.js";import{L as x}from"./Line-4Qiyz8U8.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dfsy3Tmh.js";import{T as V}from"./Tooltip-Df9xmlZA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DOE8j2mB.js";import"./Layer-C9Gg67SI.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./Label-BR5BCwPX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbGeHIXa.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./types-BuPE8SUX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CR8grWP_.js";import"./throttle-Dubphbjd.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./axisSelectors-C-S7b24Y.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./Curve-B398d6Gz.js";import"./step-1QEEOZnW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DzsSkQFR.js";import"./useAnimationId-DDbhsfXp.js";import"./ActivePoints-OEb_V2h_.js";import"./Dot-BO-47chS.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./ErrorBarContext-D8VbAhOk.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./graphicalItemIdentity-BD7rPDFr.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./useElementOffset-P4rP0RLr.js";import"./uniqBy-D-I4fNAI.js";import"./iteratee-DsQTe1TT.js";import"./Cross-BSR1dAMZ.js";import"./Rectangle-BIKDq1_W.js";import"./util-Dxo8gN5i.js";import"./Sector-BM4nRum4.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
