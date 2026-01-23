import{e}from"./iframe-CT4QuQ5L.js";import{X as s}from"./XAxis-DHcCUjsJ.js";import{R as y}from"./arrayEqualityCheck-CUEtHgfA.js";import{C as g}from"./ComposedChart-DZSwiMb4.js";import{L as x}from"./Line-DZ2dCTzj.js";import{R as S}from"./RechartsHookInspector-lcTlhUAW.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DlMKUcSY.js";import{T as O}from"./Tooltip-D4I9rTHE.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./CartesianAxis-ByfjT7H_.js";import"./Layer-BIxjtyeO.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./Label-CFlrJOC9.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B4whtcRw.js";import"./zIndexSlice-BbZ3gLFC.js";import"./types-CGMRlxY8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CidIT9Ht.js";import"./CategoricalChart-DmUQY6Sd.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./ReactUtils-BD8G1aYb.js";import"./ActivePoints-5c917mHb.js";import"./Dot-COXd4F6H.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./ErrorBarContext-DQ9IsJoH.js";import"./GraphicalItemClipPath-BaTdDRki.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./useAnimationId-ByA7rgvy.js";import"./getRadiusAndStrokeWidthFromDot-dH9jVCiW.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJlDY3Tg.js";import"./Trapezoid-C3eKH3hP.js";import"./Sector-BFKxB58R.js";import"./Symbols-NgG1d1Uj.js";import"./Curve-CwfbqPR9.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";import"./useElementOffset-B6r2EuKs.js";import"./iteratee-BP4C4rB0.js";import"./Cross-CDfR4P6Z.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
