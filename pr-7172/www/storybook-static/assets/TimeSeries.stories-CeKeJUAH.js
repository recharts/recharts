import{e}from"./iframe-E-WC41kJ.js";import{X as s}from"./XAxis-BaFlydz6.js";import{R as y}from"./arrayEqualityCheck-BqUzcRut.js";import{C as g}from"./ComposedChart-Cj1Yh8a_.js";import{L as x}from"./Line-BoIXwJ9W.js";import{R as S}from"./RechartsHookInspector-DKk-8ET5.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CSKw2yvo.js";import{T as V}from"./Tooltip-Dz46u_n4.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BOHEbUwD.js";import"./Layer-DOBdv7Ak.js";import"./resolveDefaultProps-CZw5DbVo.js";import"./Text-DTbX-dn1.js";import"./DOMUtils-CpAJnaA6.js";import"./Label-C5w0zLuo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVYJjRDY.js";import"./zIndexSlice-DkBOVcrD.js";import"./immer-B2AHHn8G.js";import"./types-CSLfd7k_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BqXsAF6I.js";import"./hooks-DQ5ZrLCC.js";import"./axisSelectors-BVUql3J4.js";import"./RechartsWrapper-BIczAnOb.js";import"./index-DZtbJ9Ut.js";import"./CartesianChart-B56zTdxs.js";import"./chartDataContext-CK93mzcE.js";import"./CategoricalChart-aHZNXhsF.js";import"./ReactUtils-BHUem0rc.js";import"./ActivePoints-CdBmP24a.js";import"./Dot-hyCNPvjn.js";import"./RegisterGraphicalItemId-D0Yd-4hn.js";import"./ErrorBarContext-he9UG2nL.js";import"./GraphicalItemClipPath-CjeMVbHl.js";import"./SetGraphicalItem-FieAjGNP.js";import"./useAnimationId-Kk3oGpCX.js";import"./getRadiusAndStrokeWidthFromDot-CyXXFMBh.js";import"./ActiveShapeUtils-DBHiiMuo.js";import"./isPlainObject-CY-G0_BP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bf3uqJQh.js";import"./Trapezoid-B6nQFknd.js";import"./Sector-BB0wVMAH.js";import"./Symbols-B0YB4VCR.js";import"./symbol-BSUu54iG.js";import"./step-DU5CJrCT.js";import"./Curve-DYFm9WRY.js";import"./index-DcwfkASu.js";import"./ChartSizeDimensions-myNJ6iDJ.js";import"./OffsetShower-h4QuBQIC.js";import"./PlotAreaShower-ByNkN2fY.js";import"./useElementOffset-5CxNRm_x.js";import"./uniqBy-DVG2w1vP.js";import"./iteratee-pGdcXVZ6.js";import"./Cross-3hJ5_ELa.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
