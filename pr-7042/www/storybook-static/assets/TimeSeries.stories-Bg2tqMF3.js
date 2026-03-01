import{e}from"./iframe-Dic5b5u9.js";import{X as s}from"./XAxis-DwuUVeKv.js";import{R as y}from"./arrayEqualityCheck-CfNiUq5T.js";import{C as g}from"./ComposedChart-C5Un0Pn6.js";import{L as x}from"./Line-CpvvmXdp.js";import{R as S}from"./RechartsHookInspector-BvAm56d5.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CJF7DMMB.js";import{T as V}from"./Tooltip-BBLZYjIb.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-rhfOp6jM.js";import"./Layer--MXbGqBf.js";import"./resolveDefaultProps-DDhFhLoK.js";import"./Text-DgjxsA1i.js";import"./DOMUtils-Dx-Do2uf.js";import"./Label-XiLbdVhV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Du88RvFA.js";import"./zIndexSlice-c2vW1fTY.js";import"./immer-DO_1p9A2.js";import"./types-MaB3S0wV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CXC0QcBD.js";import"./hooks-Bu1stH2v.js";import"./axisSelectors-CqWe9_C7.js";import"./RechartsWrapper-BwcAc9rH.js";import"./index-BBLbjH9O.js";import"./CartesianChart-ouzhSpug.js";import"./chartDataContext-hawu8zXf.js";import"./CategoricalChart-CJvtpOjk.js";import"./ReactUtils-C3t93VlX.js";import"./ActivePoints-g3Y4t8e6.js";import"./Dot-DgXeUH3M.js";import"./RegisterGraphicalItemId-Wdyfwocl.js";import"./ErrorBarContext-BCjIHby4.js";import"./GraphicalItemClipPath-Uq3L6gOZ.js";import"./SetGraphicalItem-DESbPWBV.js";import"./useAnimationId-BHBeabuo.js";import"./getRadiusAndStrokeWidthFromDot-CqB2yhwJ.js";import"./ActiveShapeUtils-Bfxy2ZjA.js";import"./isPlainObject-DFOBG5y0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-Toc0UH.js";import"./Trapezoid-BhSV_XOS.js";import"./Sector-Dn12wzOD.js";import"./Symbols-Dq5eEVdj.js";import"./symbol-DYOCtDcg.js";import"./step-CGWB_5kj.js";import"./Curve-C8vpU7Np.js";import"./index-D-G3yyNK.js";import"./ChartSizeDimensions-BPhsCp9P.js";import"./OffsetShower-DiZAUQqT.js";import"./PlotAreaShower-BoaFsJKz.js";import"./useElementOffset-D9Cqq0n5.js";import"./uniqBy-BlgBf1n4.js";import"./iteratee-C4LTVJjf.js";import"./Cross-BkoZC0pM.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
