import{e}from"./iframe-C2QqRKe7.js";import{X as s}from"./XAxis-DNcvFPfK.js";import{R as y}from"./arrayEqualityCheck-PWQDmerQ.js";import{C as g}from"./ComposedChart-XS1PtTuL.js";import{L as x}from"./Line-Bg3EL3qc.js";import{R as S}from"./RechartsHookInspector-CgITLFRP.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-dRIxyhfO.js";import{T as V}from"./Tooltip-B0rpxfs0.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-se2SzLtu.js";import"./Layer-DCLj2Osy.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./Label-s7jamoYW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DIR-sv8W.js";import"./zIndexSlice-BpAhelXi.js";import"./immer-CHIvT254.js";import"./types-DlfTkI4e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-psJG_LWq.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./RechartsWrapper-uOO6_n61.js";import"./index-rLwxE0hv.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./ReactUtils-D05HJqIj.js";import"./ActivePoints-DEfaZ0g5.js";import"./Dot-CoSgEVxE.js";import"./RegisterGraphicalItemId-j0z2KBnl.js";import"./ErrorBarContext-C3fSByYS.js";import"./GraphicalItemClipPath-IOucdNEs.js";import"./SetGraphicalItem-C5oBx3dN.js";import"./useAnimationId-Bi88RhdV.js";import"./getRadiusAndStrokeWidthFromDot-BGZ245Ii.js";import"./ActiveShapeUtils-CkOZGg75.js";import"./isPlainObject-DLKiFJlX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOyb4uG2.js";import"./Trapezoid-Dk1NLMTJ.js";import"./Sector-BVmDGxYU.js";import"./Symbols-B81oQNtv.js";import"./symbol-CnCwPTjr.js";import"./step--bjVkvqq.js";import"./Curve-CBR7IDRo.js";import"./index-BnZqoCYA.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./OffsetShower-BY6uYDHq.js";import"./PlotAreaShower-DlAzy3wu.js";import"./useElementOffset-BzleAjZ-.js";import"./uniqBy-CS1JI9OO.js";import"./iteratee-G7IUGyAd.js";import"./Cross-4gLCtwOQ.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
