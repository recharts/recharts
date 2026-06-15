import{R as e}from"./iframe-sORstnao.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CLx5zWj1.js";import{R as h}from"./zIndexSlice-D4nSzQXG.js";import{C as g}from"./ComposedChart-BlA17Ulf.js";import{L as x}from"./Line-B4Nxznnp.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D2bjBGPq.js";import{T as V}from"./Tooltip-Bo23RdJr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-41kC8iMv.js";import"./CartesianAxis-B64g0dZi.js";import"./Layer--egwL1wz.js";import"./resolveDefaultProps-CiA9punn.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./Label-SYMy3G3-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEh4PufB.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./types-iWkEMmGL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./immer-6f0a2Itz.js";import"./RechartsWrapper-D1LnNbdI.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./axisSelectors-Cn-VKMDy.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./Curve-DN6qrrBJ.js";import"./step-BwuKoovG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CV70jau4.js";import"./useAnimationId-Dc5RekzQ.js";import"./string-B6fdYHAA.js";import"./ActivePoints-DgX9BosL.js";import"./Dot-EjXLgxI9.js";import"./RegisterGraphicalItemId-CV0Blp2K.js";import"./ErrorBarContext-DTHknnLU.js";import"./GraphicalItemClipPath-B7hrgjyT.js";import"./SetGraphicalItem-BWtqlZ1x.js";import"./getRadiusAndStrokeWidthFromDot-Ce5hKttK.js";import"./ActiveShapeUtils-C6v-Gqt7.js";import"./useElementOffset-BI2zHJkS.js";import"./uniqBy-DZcIVEUd.js";import"./iteratee-CLUUH9ga.js";import"./Cross-BjZK5vKu.js";import"./Rectangle-CIsVQIpM.js";import"./Sector-Da8ZKB8T.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
