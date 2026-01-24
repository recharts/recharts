import{e}from"./iframe-BMCIaxKG.js";import{X as s}from"./XAxis-CQh89uUR.js";import{R as y}from"./arrayEqualityCheck--GVOH9-X.js";import{C as g}from"./ComposedChart-BiUrjWP0.js";import{L as x}from"./Line-BYSysfKB.js";import{R as S}from"./RechartsHookInspector-BEE5VJHB.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-cgl3VJbu.js";import{T as O}from"./Tooltip-CGifnB1H.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./CartesianAxis-BYfW_8DA.js";import"./Layer-MWXbZbYh.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./Label-DX5r6J7L.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D3DglK0F.js";import"./zIndexSlice-B9Z5B7ke.js";import"./types-CjLOz-vL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DebnH94a.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./ReactUtils-5tDB8KCJ.js";import"./ActivePoints-3VFSNx0Z.js";import"./Dot-Bk1pRUj2.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./ErrorBarContext-KqD_eRKg.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./useAnimationId-BmU-cqjD.js";import"./getRadiusAndStrokeWidthFromDot-BdARBz_p.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1cropaK.js";import"./Trapezoid-CAvOGSEj.js";import"./Sector-DluXzhdl.js";import"./Symbols-DwSHOnga.js";import"./Curve-B-WNVokC.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";import"./useElementOffset-CqP1o4V0.js";import"./iteratee-C2T4gNsh.js";import"./Cross-CMeEtOq-.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
