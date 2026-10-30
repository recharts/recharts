import{R as e}from"./iframe-DRd8L1ij.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DYHP_qTD.js";import{R as h}from"./zIndexSlice-DWK0mKBW.js";import{C as g}from"./ComposedChart-BgiL4Xm-.js";import{L as x}from"./Line-CN_lgmVk.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Degm7ixx.js";import{T as V}from"./Tooltip-CGl1c65o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BCEsA_1Q.js";import"./Layer-C-w_mvnX.js";import"./resolveDefaultProps--2iGUKCh.js";import"./Text-DOqNkwx7.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./Label-Dlqk38Aa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./throttle-BZHSEq8k.js";import"./types-99rmuj1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DKYErlU4.js";import"./RechartsWrapper-CVHpNPrj.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./Curve-B3UG50Pe.js";import"./step-CVL70ILG.js";import"./path-DyVhHtw_.js";import"./LabelList-C56jidjO.js";import"./ActivePoints-DpFFg10s.js";import"./Dot-Dinx-ymZ.js";import"./activeStyles-N3dA5laV.js";import"./useAnimationId-C1EYHtHK.js";import"./dataEntryStyles-CMr7JuEI.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./ErrorBarContext-DGvI8kwC.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getRadiusAndStrokeWidthFromDot-CcwRzSoX.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./useElementOffset-DvtLZm2w.js";import"./uniqBy-CQ6eO9fT.js";import"./iteratee-0XuJHBpI.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C3EgGr3a.js";import"./Rectangle-DdQ2_4X9.js";import"./util-Dxo8gN5i.js";import"./Sector-BQUVlDaO.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
