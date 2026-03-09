import{e}from"./iframe-CE_u6gw7.js";import{X as s}from"./XAxis-CLmHv_2r.js";import{R as y}from"./arrayEqualityCheck-DrWQ_zH1.js";import{C as g}from"./ComposedChart-BtdcIjSh.js";import{L as x}from"./Line-C8DzJEYg.js";import{R as S}from"./RechartsHookInspector-Dl79BROd.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DJKgZxBp.js";import{T as V}from"./Tooltip-BZFuu6Lh.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CWIyTumo.js";import"./Layer-DWHUvPCA.js";import"./resolveDefaultProps-B_XoAT-1.js";import"./Text-CMYMNHqG.js";import"./DOMUtils-BxWdBvEt.js";import"./Label-B0RF5qp9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmUZ0Rp1.js";import"./zIndexSlice-BphKS-MH.js";import"./immer-B4lMi1z1.js";import"./types-BY4GBGia.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-PB7f1cWi.js";import"./hooks-PVjuMKZG.js";import"./axisSelectors-BIg47fnU.js";import"./RechartsWrapper-B6u2BPsd.js";import"./index-CxjNEs9W.js";import"./CartesianChart-Cxn-kkBD.js";import"./chartDataContext-DcP55NXx.js";import"./CategoricalChart-8rYVrRQy.js";import"./ReactUtils-DKt0JvWb.js";import"./ActivePoints-hrEYGtat.js";import"./Dot-CRKbFyPB.js";import"./RegisterGraphicalItemId-CbUb9Psg.js";import"./ErrorBarContext-Cf8SIugI.js";import"./GraphicalItemClipPath-DEfFS43K.js";import"./SetGraphicalItem-afAcTt-s.js";import"./useAnimationId-Ey9rpLv3.js";import"./getRadiusAndStrokeWidthFromDot-CYfIvNV9.js";import"./ActiveShapeUtils-bsQr1W6P.js";import"./isPlainObject-B1Oby2ns.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CJD0TK60.js";import"./Trapezoid-3IU8o-1x.js";import"./Sector-DrGniStY.js";import"./Symbols-BcL7Z710.js";import"./symbol-CRUhxG3e.js";import"./step-CYcDECZ0.js";import"./Curve-VV1uNtUT.js";import"./index-BnKoqAo2.js";import"./ChartSizeDimensions-DBXaHco-.js";import"./OffsetShower-Dg42jmMc.js";import"./PlotAreaShower-Dg2xDHUw.js";import"./useElementOffset-CsNs9pCE.js";import"./uniqBy-B6So3ul3.js";import"./iteratee-D0NxlJV3.js";import"./Cross-Ci23TiHh.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
