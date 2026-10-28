import{R as e}from"./iframe-B5-NOQ5t.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BFljSmnb.js";import{R as h}from"./zIndexSlice-CRh8M764.js";import{C as g}from"./ComposedChart-Cs-WfBMv.js";import{L as x}from"./Line-DcgWWTAC.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BV3y_nyi.js";import{T as V}from"./Tooltip-DSfNKNAb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BQONH3FI.js";import"./Layer-vSXC9HFp.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./Text-B1H13EKo.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./Label-Buxp0onk.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./throttle-BmJCRGcn.js";import"./types-BMOXg_-b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-CwdbuGI9.js";import"./index-CyjoC35Z.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CoB8fX7y.js";import"./RechartsWrapper-DlDVaHKU.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./Curve-JcmdhaiD.js";import"./step-CC8FisnC.js";import"./path-DyVhHtw_.js";import"./LabelList-D_E_aw3e.js";import"./ActivePoints-CT1sEpay.js";import"./Dot-Qrt0ET2t.js";import"./activeStyles-DCKEH4qZ.js";import"./useAnimationId-CsdMGkaP.js";import"./dataEntryStyles-DTbCoLqH.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./ErrorBarContext-x4ks4uU4.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getRadiusAndStrokeWidthFromDot-t_9z2IoB.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./useEffectiveDataKey-CE1na-4k.js";import"./useElementOffset-RuET0wQK.js";import"./uniqBy-CQFuYkxP.js";import"./iteratee-Do7GGGp4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DBjXfX2z.js";import"./Rectangle-B17Nym8J.js";import"./util-Dxo8gN5i.js";import"./Sector-BXCggyyt.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
