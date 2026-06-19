import{R as e}from"./iframe-DDa7m_LV.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C_90q5ur.js";import{R as h}from"./zIndexSlice-BGDMq11w.js";import{C as g}from"./ComposedChart-DbnPvwSg.js";import{L as x}from"./Line-CgnFp_Ki.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-lQF3DEYD.js";import{T as V}from"./Tooltip-BwWHKIix.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BkRD0rv1.js";import"./CartesianAxis-BYwyVqNa.js";import"./Layer-DzM6lalT.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./Label-CwmoSFs2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DErURTRW.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./types-BQpkl3V-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BldZtaeN.js";import"./immer-CDcbaTsx.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./index-Dqdzi7xh.js";import"./axisSelectors-B-E6faSk.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CategoricalChart-B4hxnAvN.js";import"./Curve-1MKNX4lJ.js";import"./step-xwmEGnAg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B4Or3-X4.js";import"./useAnimationId-DndzYlXq.js";import"./ActivePoints-2d86kPF5.js";import"./Dot-CTvLKOFz.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./ErrorBarContext-Cme-vC5F.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";import"./getRadiusAndStrokeWidthFromDot-CcrjGEgC.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./useElementOffset-Bqhv7_31.js";import"./uniqBy-CByu8z8H.js";import"./iteratee-nz0FM5kv.js";import"./Cross-gdCGpGcX.js";import"./Rectangle-CbWrvagV.js";import"./util-Dxo8gN5i.js";import"./Sector-Ozh6MJmB.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
