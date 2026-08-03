import{R as e}from"./iframe-DJpt453r.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BA-ddF1e.js";import{R as h}from"./zIndexSlice-BEI9HpJP.js";import{C as g}from"./ComposedChart-kTyvHFJc.js";import{L as x}from"./Line-CECxQR0F.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B7WR5FSF.js";import{T as V}from"./Tooltip-C_bob3zv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C6-8NriX.js";import"./Layer-BYTSm4Ec.js";import"./resolveDefaultProps-CLx3DpUR.js";import"./Text-Bi21htDl.js";import"./DOMUtils-DAtMTnWN.js";import"./isWellBehavedNumber-DKWCRCpD.js";import"./Label-dDyJmDxJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-K-94Fkyc.js";import"./index-DoMIVr-B.js";import"./index-BXFZGfKa.js";import"./types-C91tVnYw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice--nt2FmmR.js";import"./throttle-DmwBytCC.js";import"./RechartsThemeContext-DM-6Q2RL.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DPF1jiXq.js";import"./index-D2X8nAMV.js";import"./index-DNypUe5l.js";import"./axisSelectors-CK35li4D.js";import"./CartesianChart-m4WNSH7S.js";import"./chartDataContext-D5OCzkMp.js";import"./CategoricalChart-Dhlk9IOH.js";import"./Curve-DXMTS4fM.js";import"./step-DLRDUC9Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CECphMY_.js";import"./useAnimationId-BTloGm3i.js";import"./ActivePoints-DNbR-YxP.js";import"./Dot-1UuNdg9e.js";import"./RegisterGraphicalItemId-DBh3uGfr.js";import"./ErrorBarContext-KgdOLmDh.js";import"./GraphicalItemClipPath-CbnfZ2S6.js";import"./SetGraphicalItem-CyMh2I00.js";import"./graphicalItemIdentity-DEqpaJdn.js";import"./ActiveShapeUtils-ML-GG5dE.js";import"./useElementOffset-CtGMFqoH.js";import"./uniqBy-zULCev5m.js";import"./iteratee-VLem8QJ3.js";import"./Cross-DrmSnxpC.js";import"./Rectangle-Bb9l30Tv.js";import"./util-Dxo8gN5i.js";import"./Sector-BxnUayGt.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
