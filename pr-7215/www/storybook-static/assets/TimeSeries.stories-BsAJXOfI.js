import{e}from"./iframe-Qs6O8wpy.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B5r0d-Gb.js";import{R as y}from"./arrayEqualityCheck-DiPmtVsh.js";import{C as g}from"./ComposedChart-DbT19AeO.js";import{L as x}from"./Line-BBeciYnn.js";import{R as S}from"./RechartsHookInspector-D6-uk_4z.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-C7QcSE0p.js";import{T as V}from"./Tooltip-Bp0Bo3zm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BvKnbhLV.js";import"./Layer-CICKsHec.js";import"./resolveDefaultProps-DkvZoiFw.js";import"./Text-DQ28Uic0.js";import"./DOMUtils-C3QfuTRj.js";import"./Label-DJKNn60w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dzi2jwDH.js";import"./zIndexSlice-BdRBx_3M.js";import"./immer-BUNCc4EX.js";import"./types-Cs32UOA0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Si7G1rdh.js";import"./hooks-C6T0ux6I.js";import"./axisSelectors-BqhGWF7A.js";import"./RechartsWrapper-DXH9h8qa.js";import"./index-BLhY0zjE.js";import"./CartesianChart-CZ-ONe5U.js";import"./chartDataContext-Dx6fqFLh.js";import"./CategoricalChart-D7dhNxwj.js";import"./Curve-uoVbw7SZ.js";import"./step-6wxOI7IM.js";import"./AnimatedItems-Bmk-Vn6E.js";import"./useAnimationId-Bx8YWNYj.js";import"./string-B6fdYHAA.js";import"./ActivePoints-DlYWl3uo.js";import"./Dot-Ck8_T0Z-.js";import"./RegisterGraphicalItemId-D_GbpICU.js";import"./ErrorBarContext-DiylhWX0.js";import"./GraphicalItemClipPath-97GOlLPd.js";import"./SetGraphicalItem-CPtdCQ7b.js";import"./getRadiusAndStrokeWidthFromDot-DBGot3sv.js";import"./ActiveShapeUtils--dL8_NPS.js";import"./isPlainObject-CN0NSOTq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bukdiqfq.js";import"./Trapezoid-CT6ZG2gE.js";import"./Sector-ByAF8mSb.js";import"./Symbols-B1g8PGM_.js";import"./symbol-DP01-Acw.js";import"./index-COAE6_R9.js";import"./ChartSizeDimensions-h_Vewza7.js";import"./OffsetShower-Dv7qO3Dx.js";import"./PlotAreaShower-CTCwIg18.js";import"./useElementOffset-CF7P1hcV.js";import"./uniqBy-BKY48JQd.js";import"./iteratee-CVgA4_T5.js";import"./Cross-CQFdEXLw.js";const zt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Gt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Gt as __namedExportsOrder,zt as default};
