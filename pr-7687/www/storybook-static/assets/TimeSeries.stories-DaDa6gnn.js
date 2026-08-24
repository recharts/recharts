import{R as e}from"./iframe-DY9K6heQ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C70fZAmi.js";import{R as h}from"./zIndexSlice-Djux0zqs.js";import{C as g}from"./ComposedChart-BUGaiyhR.js";import{L as x}from"./Line-BBRId2pi.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dg6wJCEU.js";import{T as V}from"./Tooltip-DyX71glS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-VfKXuPT2.js";import"./Layer-D519VTAP.js";import"./resolveDefaultProps-CO8OTY-B.js";import"./Text-CteNh9ks.js";import"./DOMUtils-B_xez7qI.js";import"./isWellBehavedNumber-f1cIhCPU.js";import"./useId-C5bD9K_5.js";import"./useBackwardsCompatibleTheme-C3HLbI6N.js";import"./Label-CfiePbO3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HnenvO0i.js";import"./index-DB-c6PeB.js";import"./index-9g91mWlk.js";import"./types-Cb4xht2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6QgZ4Eb.js";import"./throttle-DOydnajF.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CqtOwQCr.js";import"./index-RUzZ63uG.js";import"./index-B-UxVCSc.js";import"./axisSelectors-DwkKcaC_.js";import"./CartesianChart-CY7DJm7t.js";import"./chartDataContext-BtMzfRRp.js";import"./CategoricalChart-COo_l3nK.js";import"./Curve-B05IFDSM.js";import"./step-vm1DaOvo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DF7HmAGo.js";import"./useAnimationId-BQX98cVJ.js";import"./ActivePoints-6F4_jb_h.js";import"./Dot-hKVGVTVc.js";import"./RegisterGraphicalItemId-za1bJavc.js";import"./ErrorBarContext-g1sTu3z_.js";import"./GraphicalItemClipPath-BVMw74rr.js";import"./SetGraphicalItem-B5Li8-y0.js";import"./getRadiusAndStrokeWidthFromDot-C3OVaU-V.js";import"./ActiveShapeUtils-EdkW4Ajt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BrumgYoX.js";import"./uniqBy-lwHF6dFC.js";import"./iteratee-CNq4H92p.js";import"./Cross-CCQTcFbN.js";import"./Rectangle-DoSmT7gp.js";import"./util-Dxo8gN5i.js";import"./Sector-D0ZqkC-O.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
