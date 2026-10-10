import{R as e}from"./iframe-CbPFwm7l.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-I1Z8SlwP.js";import{R as h}from"./zIndexSlice-cmGazbpI.js";import{C as g}from"./ComposedChart-sATzgU5r.js";import{L as x}from"./Line-B24tAJlu.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CHJf7NcK.js";import{T as V}from"./Tooltip-CitDpTHX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CRYdmYpO.js";import"./Layer-BHHNaIH9.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./Text-BOjecne3.js";import"./pageBackground-5oAWQhvG.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./Label-Dd7y5kyu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJZ-23nf.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./types-BHufKOgb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./throttle-CsRm63w_.js";import"./index-Cvmqex35.js";import"./index-khK7m-8Q.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C9c4OR_j.js";import"./axisSelectors-31esebaG.js";import"./index-CKBSX-em.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./Curve-CJ_YkHWB.js";import"./step-BRl-9aNd.js";import"./path-DyVhHtw_.js";import"./activeStyles-C0PrsAC0.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./ActivePoints-ED4u2pJ9.js";import"./Dot-D4Vk0xq6.js";import"./ErrorBarContext-CuPWqX0o.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./getRadiusAndStrokeWidthFromDot-DI6x_PKf.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";import"./useElementOffset-CQtr63ND.js";import"./uniqBy-CYNKKwCT.js";import"./iteratee-Cb_SGx_w.js";import"./Cross-CYLZd8JU.js";import"./Rectangle-DZKE4x95.js";import"./util-Dxo8gN5i.js";import"./Sector-vTLrJK9w.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
