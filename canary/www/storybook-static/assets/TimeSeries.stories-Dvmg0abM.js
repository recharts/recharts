import{e}from"./iframe-Dd1Sjt9X.js";import{X as s}from"./XAxis-BYGa6kOu.js";import{R as y}from"./arrayEqualityCheck-pUdtrDKv.js";import{C as g}from"./ComposedChart-CuflWUWP.js";import{L as x}from"./Line-BfTN-7xH.js";import{R as S}from"./RechartsHookInspector-Cr2Johcx.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BBdKeTjL.js";import{T as V}from"./Tooltip-BaKcSW8R.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CovsPuDZ.js";import"./Layer-CX4gucce.js";import"./resolveDefaultProps-C6lHiyqW.js";import"./Text-Cl6XBoxV.js";import"./DOMUtils-BIFKO-UG.js";import"./Label-ByOVYkgq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nfwFwrW8.js";import"./zIndexSlice-B2TlWuzN.js";import"./immer-ezkOMCj7.js";import"./types-5Z667yyH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DDOiTdbf.js";import"./hooks-CKgsmzQh.js";import"./axisSelectors-DCUpOlmc.js";import"./RechartsWrapper-Dw3RQG7d.js";import"./index-DHxloPwC.js";import"./CartesianChart-BimCUxdh.js";import"./chartDataContext-CLOoHHQa.js";import"./CategoricalChart-CU3zaaGt.js";import"./ReactUtils-0A2SPQqI.js";import"./ActivePoints-DahGmIAZ.js";import"./Dot-BMZXiNKw.js";import"./RegisterGraphicalItemId-Cz8x82sR.js";import"./ErrorBarContext-L_IEZQFq.js";import"./GraphicalItemClipPath-DOJdP2rh.js";import"./SetGraphicalItem-DT-0SkIe.js";import"./useAnimationId-ax-iI9cP.js";import"./getRadiusAndStrokeWidthFromDot-DKdUNLBw.js";import"./ActiveShapeUtils-DgMKp2OJ.js";import"./isPlainObject-Dk8iq51s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChXOGBDT.js";import"./Trapezoid-XW4nj9Uq.js";import"./Sector-C-MT-tlR.js";import"./Symbols-nv82Msvy.js";import"./symbol-DU1W-Oc6.js";import"./step-3UMSkQg1.js";import"./Curve-DCc30kqb.js";import"./index-CAwGKYht.js";import"./ChartSizeDimensions-CyTaJmPr.js";import"./OffsetShower-BM6oyifk.js";import"./PlotAreaShower-D-MhE31R.js";import"./useElementOffset-BjCP6cea.js";import"./uniqBy-DVrqLngK.js";import"./iteratee-DQ3FPWwk.js";import"./Cross-DvE5CAZT.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
