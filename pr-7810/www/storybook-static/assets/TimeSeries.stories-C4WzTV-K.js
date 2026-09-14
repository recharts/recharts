import{R as e}from"./iframe-bFSgLdPD.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bw0rvwCt.js";import{R as h}from"./zIndexSlice-D5upya8o.js";import{C as g}from"./ComposedChart-rnVwwIMy.js";import{L as x}from"./Line-DgS_baGq.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DJKaPyhK.js";import{T as V}from"./Tooltip-CF-fAa6p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CrKpg4w8.js";import"./Layer-B9YPmvvS.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./Text-BFarDq7U.js";import"./DOMUtils-DvIkXWfS.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./Label-CpotZ0Ob.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1KbNkPu.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./types-D_jE8zAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./throttle-u-v2gKhP.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BY-4gTQl.js";import"./axisSelectors-jpWGPgQR.js";import"./index-DzQCF7Uo.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./Curve-C65UunW2.js";import"./step-my7iJLmD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C1Ji84_q.js";import"./useAnimationId-C-HuNRtZ.js";import"./ActivePoints-t5f1lIKd.js";import"./Dot-DYaRHvIo.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./ErrorBarContext-BTgf3Fn1.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getRadiusAndStrokeWidthFromDot-BeJ6jSsg.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";import"./useElementOffset-DgdUocH5.js";import"./uniqBy-C-W8pKck.js";import"./iteratee-BdAcVhmI.js";import"./Cross-DIq_YqZ2.js";import"./Rectangle-CtC0waIA.js";import"./util-Dxo8gN5i.js";import"./Sector-doVGkRfa.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
