import{R as e}from"./iframe-DgJplLvS.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cv0cLySm.js";import{R as h}from"./zIndexSlice-BEw7ZoBF.js";import{C as g}from"./ComposedChart-C92-LZLE.js";import{L as x}from"./Line-DVl-UA0H.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-T7rND5KE.js";import{T as V}from"./Tooltip-Diuoded2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-iv3hpdCC.js";import"./Layer-CDKK6jHZ.js";import"./resolveDefaultProps-CgspoxK6.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./Label-DUk5cie5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DezlpkmC.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./types-DgMxxOTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RcICWtpY.js";import"./throttle-BFtjLKgc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DkMI-tV9.js";import"./index-Bwl4xJcj.js";import"./index-DBV_c5tC.js";import"./axisSelectors-YqbMVrI6.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./Curve-BjTIUQH-.js";import"./step-CkXO2b_C.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hO6Ptiqq.js";import"./useAnimationId-SGeRDQQf.js";import"./ActivePoints-Dudi51yy.js";import"./Dot-CJqaNK4q.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./getRadiusAndStrokeWidthFromDot-DkNcCvt4.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./useElementOffset-BA__8TOj.js";import"./uniqBy-BsO6J-fr.js";import"./iteratee-m2OFbEqY.js";import"./Cross-dkc1C4KG.js";import"./Rectangle-BkNYTIw0.js";import"./util-Dxo8gN5i.js";import"./Sector-DOS1I4Dx.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
