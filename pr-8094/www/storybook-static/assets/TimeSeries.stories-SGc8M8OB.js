import{R as e}from"./iframe-DsuaRm2b.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DLqBMq0Q.js";import{R as h}from"./zIndexSlice-BHCK5tg8.js";import{C as g}from"./ComposedChart-C07yVNqj.js";import{L as x}from"./Line-DtkCR5A2.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D1FvEoQ3.js";import{T as V}from"./Tooltip-e9xtskO3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./Label-Bg_SjTDz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./throttle-CuCThFR3.js";import"./dataEntryStyles-CVVg9ITz.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CXh7ZK0v.js";import"./RechartsWrapper-B7rLRibb.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./Curve-B54D09ht.js";import"./step-CnnXSPZn.js";import"./path-DyVhHtw_.js";import"./LabelList-B1g8Cfod.js";import"./ActivePoints-BIHfIwHR.js";import"./Dot-CLio3VMY.js";import"./activeStyles-BEbyAFUN.js";import"./useAnimationId-BDMFeBiK.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getRadiusAndStrokeWidthFromDot-CuYo3i94.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./useElementOffset-BH16anoB.js";import"./uniqBy-BvBJ9JSl.js";import"./iteratee-D6J9B8SK.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CHnu3AiU.js";import"./Rectangle-Dz3Crc0K.js";import"./util-Dxo8gN5i.js";import"./Sector-jsLncyAA.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
