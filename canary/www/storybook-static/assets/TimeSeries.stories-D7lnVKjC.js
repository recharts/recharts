import{e}from"./iframe-Bnj2hik-.js";import{X as s}from"./XAxis-DOcRfQ-w.js";import{R as y}from"./arrayEqualityCheck-CvUuuvKy.js";import{C as g}from"./ComposedChart-DOtfomr9.js";import{L as x}from"./Line-D9lTYQ4h.js";import{R as S}from"./RechartsHookInspector-C_AeFs2E.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DFI1wFeY.js";import{T as O}from"./Tooltip-5z-9ouH6.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./CartesianAxis-5Ck476fs.js";import"./Layer-CTa4OydD.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./Label-CGAHaC0Q.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-AOmKG0iq.js";import"./zIndexSlice-CXHmHRtI.js";import"./types-BDwtxhLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bya6Ssf9.js";import"./CategoricalChart-6PDUcg0C.js";import"./RechartsWrapper-B0Rp0hND.js";import"./CartesianChart-D6wdmsep.js";import"./chartDataContext-DBEZcAkK.js";import"./ReactUtils-Df0RtsJl.js";import"./ActivePoints-Zh-g-ty0.js";import"./Dot-pJFhyCMJ.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./ErrorBarContext-D6agTjiV.js";import"./GraphicalItemClipPath-UbaOhT8l.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./useAnimationId-APU2l9w6.js";import"./getRadiusAndStrokeWidthFromDot-DrD-zBLL.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./Symbols-DhIIpi5f.js";import"./Curve-DmusCa7H.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";import"./useElementOffset-Cs4N1beZ.js";import"./iteratee-hXzJyvq3.js";import"./Cross-g1_l6O_A.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
