import{e}from"./iframe-DkLawzFT.js";import{X as s}from"./XAxis-Bhs0VEqV.js";import{R as y}from"./arrayEqualityCheck-D3l_Six5.js";import{C as g}from"./ComposedChart-BLaa22ep.js";import{L as x}from"./Line-CZNl7Zx1.js";import{R as S}from"./RechartsHookInspector-CP5-3lHb.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CQPtLnPq.js";import{T as V}from"./Tooltip-N6gruFKC.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B2aKO3V6.js";import"./Layer-D1t_xfer.js";import"./resolveDefaultProps-BrteeSnw.js";import"./Text-Cnf9BrSi.js";import"./DOMUtils-CeS2jzYu.js";import"./Label-B8g-EXnh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzQ04t8l.js";import"./zIndexSlice-D7gaPfmN.js";import"./immer-BgQ6ewOL.js";import"./types-BodbCBWC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CxLVT98p.js";import"./hooks-mxsXvsXQ.js";import"./axisSelectors-WJrRsxNm.js";import"./RechartsWrapper-ZZ9SYGf8.js";import"./index-BAEjUqpG.js";import"./CartesianChart-B_kqxRby.js";import"./chartDataContext-BQhtyhGa.js";import"./CategoricalChart-ClWY8mqV.js";import"./ReactUtils-0q8uPUdp.js";import"./ActivePoints-Fx_zKUSB.js";import"./Dot-Dka2WOg7.js";import"./RegisterGraphicalItemId-Sw1cCXMw.js";import"./ErrorBarContext-BlXGa7jj.js";import"./GraphicalItemClipPath-BMzTlgpv.js";import"./SetGraphicalItem-CQ9RSPfd.js";import"./useAnimationId-ndVuSCuU.js";import"./getRadiusAndStrokeWidthFromDot-CfgE0Jeh.js";import"./ActiveShapeUtils-CYrS0ywm.js";import"./isPlainObject-Dna09QVC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmL8vsSC.js";import"./Trapezoid-DgQekCnf.js";import"./Sector-CQDhqwWL.js";import"./Symbols-BESx1iMX.js";import"./symbol-yD_N7Rt-.js";import"./step-BKMOa0zg.js";import"./Curve-BHXnsRVh.js";import"./index-ClmqdCp3.js";import"./ChartSizeDimensions-sxZZm2vK.js";import"./OffsetShower-Bbq9KY1d.js";import"./PlotAreaShower-BpZ3JX6M.js";import"./useElementOffset-kARJ2Ib4.js";import"./uniqBy-De2uIt7f.js";import"./iteratee-py5Iz_wR.js";import"./Cross-BTts5VZh.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
