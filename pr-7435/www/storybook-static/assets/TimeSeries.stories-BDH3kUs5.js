import{R as e}from"./iframe-h_l55m_t.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CsptUwef.js";import{R as h}from"./zIndexSlice-DtOJxrcv.js";import{C as g}from"./ComposedChart-BAup3dHc.js";import{L as x}from"./Line-7LYQCCSG.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D1BOaHId.js";import{T as V}from"./Tooltip-CGR9o2kK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DBMd4dxk.js";import"./CartesianAxis-CTJIWXoj.js";import"./Layer-rrxq_JkN.js";import"./resolveDefaultProps-D8-0lbpZ.js";import"./Text-Cm107LG_.js";import"./DOMUtils-CG_MvRCE.js";import"./isWellBehavedNumber-B1Li3gr_.js";import"./Label-Biqo5Eli.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7uTd8cS.js";import"./index-BdQ12acY.js";import"./index-wHKnWgSU.js";import"./types-7ZgAaUHx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CmHU-lei.js";import"./immer-3kgM1Yrm.js";import"./RechartsWrapper-GmtYc35d.js";import"./index-CCMntdAh.js";import"./index-CY3OpiR2.js";import"./axisSelectors-DWvAkDEO.js";import"./CartesianChart-BQCaFT7C.js";import"./chartDataContext-Bq9tVFqt.js";import"./CategoricalChart-sP3BCXGi.js";import"./Curve-BUDj-vjw.js";import"./step-D8_8cE93.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMyeCqfp.js";import"./useAnimationId-Dn6PcdJm.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BgXP9QSv.js";import"./Dot-CN1BxqM7.js";import"./RegisterGraphicalItemId-MWElRUOD.js";import"./ErrorBarContext-BL5qoR-W.js";import"./GraphicalItemClipPath-BwjhPGOP.js";import"./SetGraphicalItem-tyshoNX9.js";import"./getRadiusAndStrokeWidthFromDot-BDAvmvPt.js";import"./ActiveShapeUtils-DIPFKhPu.js";import"./useElementOffset-DAfE9lYr.js";import"./uniqBy-g-J-Oe_O.js";import"./iteratee-C8gdJKoW.js";import"./Cross-BMwWEkSs.js";import"./Rectangle-DY_Adz4k.js";import"./Sector-DUqpwzKo.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
