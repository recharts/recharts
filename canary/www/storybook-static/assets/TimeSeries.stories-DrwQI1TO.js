import{R as e}from"./iframe-IxvRXYOM.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-R0eKTQQ1.js";import{R as h}from"./zIndexSlice-Dia8XTL2.js";import{C as g}from"./ComposedChart-BzuXDUIC.js";import{L as x}from"./Line-BaG6CBFi.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-FVb6w9iL.js";import{T as V}from"./Tooltip-9KuCdUcm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BJBAf6Tc.js";import"./Layer-DXPk_QPv.js";import"./resolveDefaultProps-C8gKTQR0.js";import"./Text-VVpkyRHU.js";import"./DOMUtils-7IYxeTO_.js";import"./isWellBehavedNumber-1PbkiApc.js";import"./useId-BCDrS8Ec.js";import"./useBackwardsCompatibleTheme-niu8PbB-.js";import"./Label-DYJa0Pce.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3BGhz3Z.js";import"./index-BXDqCn7f.js";import"./index-D34-i1nc.js";import"./types-D8hPxmLy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CchY5W_H.js";import"./throttle-DoVSkdKP.js";import"./index-BFt1Ny-W.js";import"./index-WdtNPuBq.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DouzT1Jm.js";import"./axisSelectors-CsegCW8b.js";import"./index-C1qZei_h.js";import"./CartesianChart-D4DhIf-5.js";import"./chartDataContext-DPXilm1s.js";import"./CategoricalChart-CGmBQpoA.js";import"./Curve-B1Tl1par.js";import"./step-C5uaOgJB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJiaeq4S.js";import"./useAnimationId-B5Gku1OT.js";import"./ActivePoints-lXhg7PyY.js";import"./Dot-Ckx8C-Ql.js";import"./RegisterGraphicalItemId-CCZFRoFR.js";import"./ErrorBarContext-C1aHHTJh.js";import"./GraphicalItemClipPath-B3n8HZ3n.js";import"./SetGraphicalItem-CU9UT-3r.js";import"./getRadiusAndStrokeWidthFromDot-B0LLmdQO.js";import"./ActiveShapeUtils-BrhiJYt9.js";import"./useGraphicalItemIdentity-U0g776Bm.js";import"./useElementOffset-Ck-qsnV8.js";import"./uniqBy-9Zym-iBR.js";import"./iteratee-CRMfd8M7.js";import"./Cross-DOBLdcqU.js";import"./Rectangle-Bpb36EBT.js";import"./util-Dxo8gN5i.js";import"./Sector-DVYh-31O.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
