import{e}from"./iframe-BDLVz6Jf.js";import{X as s}from"./XAxis-rGGZujHk.js";import{R as y}from"./arrayEqualityCheck-CUwHcVyI.js";import{C as g}from"./ComposedChart-B8vrvgyV.js";import{L as x}from"./Line-89TDDsmY.js";import{R as S}from"./RechartsHookInspector-DdlV-82E.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DrvOhfRi.js";import{T as V}from"./Tooltip-Zg6smBq5.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DpZWUA10.js";import"./Layer-E90Uxi_N.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CeMtlwqL.js";import"./zIndexSlice-Dba-j24Y.js";import"./immer-D7ppHI2d.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./RechartsWrapper-BNGXTKCd.js";import"./index-B5IfmkK5.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./ReactUtils-Z_uY6BWT.js";import"./ActivePoints-YBAJTo47.js";import"./Dot-ed0ZAtVZ.js";import"./RegisterGraphicalItemId-DgsZoNJO.js";import"./ErrorBarContext-CHqnPMdC.js";import"./GraphicalItemClipPath-52erAg5v.js";import"./SetGraphicalItem-D-MDoVx7.js";import"./useAnimationId-DiGR44lM.js";import"./getRadiusAndStrokeWidthFromDot-gJJ60q-F.js";import"./ActiveShapeUtils-1odowpJ3.js";import"./isPlainObject-D6WBWEYO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MA5abZlf.js";import"./Trapezoid-B0zvPW8H.js";import"./Sector-Bzk7xgyA.js";import"./Symbols-UHZicULa.js";import"./symbol-DWU8_PrF.js";import"./step-BVw-sImN.js";import"./Curve-BkotQ_Ul.js";import"./index-B1g-GKPY.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";import"./useElementOffset-CP3IlWVh.js";import"./uniqBy-CYBnIEgM.js";import"./iteratee-Uscb-axC.js";import"./Cross-tyX5lzXH.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
