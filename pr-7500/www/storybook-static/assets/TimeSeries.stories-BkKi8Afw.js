import{R as e}from"./iframe-Cz3m2SJ3.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BOtH_Bb_.js";import{R as h}from"./zIndexSlice-Cjh-3nYc.js";import{C as g}from"./ComposedChart-CSmCvL3U.js";import{L as x}from"./Line-C1Jzdpj9.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-WEKEQNVu.js";import{T as V}from"./Tooltip-C9yhbHaY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DnJGsTBL.js";import"./CartesianAxis-C3-vjNSw.js";import"./Layer-DT2BS3Fo.js";import"./resolveDefaultProps-C8QIhMpF.js";import"./Text-CM8vLpAR.js";import"./DOMUtils-DZThnrL0.js";import"./isWellBehavedNumber-CDOyudGY.js";import"./Label-DtW8Frf2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dXuwT3rZ.js";import"./index-Ch8SxpQ7.js";import"./index-NxrJrzZn.js";import"./types-CfBB8f9x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFzmMv1J.js";import"./immer-BpZE7kkB.js";import"./RechartsWrapper-B4Ii8FQX.js";import"./index-BaDzCXFV.js";import"./index-CMdFAdtp.js";import"./axisSelectors-kRjEmRJx.js";import"./CartesianChart-BLcm5KGH.js";import"./chartDataContext-BYln8BgM.js";import"./CategoricalChart-DoGmIe9w.js";import"./Curve-Bwoz_RSs.js";import"./step-Cw3d9gls.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHx4y2NH.js";import"./useAnimationId-BTiOYTQB.js";import"./ActivePoints-CgF4v4_S.js";import"./Dot-D0XFaE4d.js";import"./RegisterGraphicalItemId-CDGD75SL.js";import"./ErrorBarContext--7X7cLyV.js";import"./GraphicalItemClipPath-Bz4IuZP3.js";import"./SetGraphicalItem-Ci_nDVmD.js";import"./getRadiusAndStrokeWidthFromDot-C8BKdMCZ.js";import"./ActiveShapeUtils-CXFbPlV-.js";import"./useElementOffset-DWoELxA5.js";import"./uniqBy-C-5jUlDv.js";import"./iteratee-BYbJoUdv.js";import"./Cross-DTqDEQzI.js";import"./Rectangle-pvDgbZGd.js";import"./util-Dxo8gN5i.js";import"./Sector-BXolgb6h.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
