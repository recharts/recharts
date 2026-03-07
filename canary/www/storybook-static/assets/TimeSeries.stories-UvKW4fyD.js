import{e}from"./iframe-BUt3wnEM.js";import{X as s}from"./XAxis-Ireg13eN.js";import{R as y}from"./arrayEqualityCheck-DNOyFRmd.js";import{C as g}from"./ComposedChart-D7vv44Nm.js";import{L as x}from"./Line-B_R5ro-W.js";import{R as S}from"./RechartsHookInspector-u0LRhk5N.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BSxK4JDa.js";import{T as V}from"./Tooltip-Bzx5G5tF.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DLCN0lIN.js";import"./Layer-f0MP4yLB.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./Label-BNS9QM1w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CD2y65wD.js";import"./zIndexSlice-7peEmfkk.js";import"./immer-Djj2d5DN.js";import"./types-C3jmTsfH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./RechartsWrapper-z5ezD12U.js";import"./index-pWLF-s6P.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./ReactUtils-Cta0-SSd.js";import"./ActivePoints-QLUPv-Aq.js";import"./Dot-Jhi_4Eo2.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./ErrorBarContext-DOPfAlmD.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./useAnimationId-0NKy_VJI.js";import"./getRadiusAndStrokeWidthFromDot-0A88qvLk.js";import"./ActiveShapeUtils-Cy5NcMU8.js";import"./isPlainObject-BhaX48PC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYFau3NF.js";import"./Trapezoid-Bi5qBDT5.js";import"./Sector-CEgJ3DUB.js";import"./Symbols-1DUTRnJc.js";import"./symbol-x739FVZ2.js";import"./step-CelYc6K9.js";import"./Curve-BEPpct8h.js";import"./index-vkdvzxS4.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./OffsetShower-Bgrzwk34.js";import"./PlotAreaShower-BgnhljdN.js";import"./useElementOffset-BQUAZa3L.js";import"./uniqBy-CsYmUuw-.js";import"./iteratee-CTh-iFMu.js";import"./Cross-BqZ9ZOi6.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
