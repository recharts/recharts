import{R as e}from"./iframe-BH2TtHlY.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-COZT_uqw.js";import{R as h}from"./zIndexSlice-BUPzf8FY.js";import{C as g}from"./ComposedChart-DsOU5PTg.js";import{L as x}from"./Line-CrpIiBSr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CXj_dWXw.js";import{T as V}from"./Tooltip-CdFMPcFV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-0pfTl-hM.js";import"./Layer-IM2jrBt3.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./Text-CevbSlGY.js";import"./ZIndexLayer-Doizp3A4.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./Label-CIPQeI3a.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CrYx-glo.js";import"./throttle-Dx7o9_lY.js";import"./types-DOMxGpI2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DsRwL_k-.js";import"./RechartsWrapper-DzLFc6RH.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./Curve-CJ99zN7P.js";import"./step-ChPkaUxk.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-oNDiL7vD.js";import"./ActivePoints-B7PZUjv_.js";import"./Dot-yQhLEV_U.js";import"./activeStyles-C4DAj0Um.js";import"./useAnimationId-CDSf-pzR.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./ErrorBarContext-4rxkwyEB.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./getRadiusAndStrokeWidthFromDot-Cst5_ZvX.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./useEffectiveDataKey-BXRZCQow.js";import"./useElementOffset-BE_errrN.js";import"./uniqBy-BMu_3qtX.js";import"./iteratee-BjDUq9-x.js";import"./isArguments-yB-y1yaH.js";import"./Cross-KIhUVeNF.js";import"./Rectangle-D0BLzMMy.js";import"./util-Dxo8gN5i.js";import"./Sector-jx2_J3sX.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
