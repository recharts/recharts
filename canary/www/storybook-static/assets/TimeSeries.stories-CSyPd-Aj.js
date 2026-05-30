import{c as e}from"./iframe-CR5xUcH4.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-CPvIxoVT.js";import{g as y}from"./zIndexSlice-Coakq-0y.js";import{C as g}from"./ComposedChart-DbazSM9x.js";import{L as x}from"./Line-V8UyMqJh.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-Cr_JmSke.js";import{T as V}from"./Tooltip-BOQV87c3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CdpBIjqV.js";import"./CartesianAxis-CM2xAnRM.js";import"./Layer-DDAYqTxx.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./Label-gV3sJO-c.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Br2sJvd3.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./types-vWyLmemb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./immer-MiNeKFai.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./axisSelectors-GqEe5nOB.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./Curve-7AAFvrE4.js";import"./step-CBodA2th.js";import"./path-DyVhHtw_.js";import"./ReactUtils-D5HGwZm0.js";import"./ActivePoints-BYKq7ayk.js";import"./Dot-DyT4z2sM.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./ErrorBarContext-C7CGAddG.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./useAnimationId-qfC-4EnL.js";import"./getRadiusAndStrokeWidthFromDot-CVCg-N3i.js";import"./ActiveShapeUtils-G1Nz0YGi.js";import"./useElementOffset-Bf2VABox.js";import"./uniqBy-CLyAGTeC.js";import"./iteratee-BLXBanMB.js";import"./Cross-B-S6Hkm2.js";import"./Rectangle-IJojDNZ6.js";import"./Sector-CARaIeNp.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
