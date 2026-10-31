import{R as e}from"./iframe-BJZBYlXs.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-BODArBrx.js";import{R as h}from"./zIndexSlice-4kzTBdEO.js";import{C as g}from"./ComposedChart-C6IGkTRw.js";import{L as x}from"./Line-DsC7P6_G.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-fXkyVTj6.js";import{T as V}from"./Tooltip-D_m6xZp8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DuzHYXrg.js";import"./Layer-BiONajIB.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./pageBackground-OPtbMqw3.js";import"./ZIndexLayer-9eIJN5cX.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./Label-BB8sjzzI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BW13raLn.js";import"./throttle-m042I2dJ.js";import"./types-BRBV9Zbz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-fPyxXNp-.js";import"./RechartsWrapper-xMruxvG5.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./Curve-BZZJQhfg.js";import"./fillDefinitions-DzwllWHv.js";import"./themeFill-DO9vEba-.js";import"./step-C9q08w-O.js";import"./path-DyVhHtw_.js";import"./LabelList-CjXuEtRO.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./activeStyles-CNDsNUTt.js";import"./useAnimationId-t_dEgl2e.js";import"./dataEntryStyles-O6Ub96yy.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./ErrorBarContext-B2TtUlqL.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./useElementOffset-7dnw2xrI.js";import"./uniqBy-C8XE-Jln.js";import"./iteratee-B-U3qR3F.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BSgYYV6b.js";import"./Rectangle-DcbqjYEw.js";import"./util-Dxo8gN5i.js";import"./Sector-Rmkv_xXG.js";const Gt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Jt as __namedExportsOrder,Gt as default};
