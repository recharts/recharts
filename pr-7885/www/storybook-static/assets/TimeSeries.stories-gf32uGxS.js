import{R as e}from"./iframe-qocy1DQe.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DVDwgnrS.js";import{R as h}from"./zIndexSlice-3RvOLzet.js";import{C as g}from"./ComposedChart-RUoVj2HF.js";import{L as x}from"./Line-DzOEwxYP.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D0IFI5Iu.js";import{T as V}from"./Tooltip-Bcd_DoaB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-MlycpDsd.js";import"./Layer-B3KOyccU.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./Text-Da9B2kdK.js";import"./DOMUtils-6qqCmkCb.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./Label-CT_NLtkb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFBos5HM.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./types-Bss1IWFA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./throttle-DL_zA7f1.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Br0BGP0j.js";import"./axisSelectors-DDRTV0S0.js";import"./index-DYvx6oZP.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./Curve-DAl3IIzp.js";import"./step-nn4oKmLh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NvJhAvIW.js";import"./useAnimationId-BzcHu7-i.js";import"./ActivePoints-DmiMFqmD.js";import"./Dot-j6skezxs.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./ErrorBarContext-B1oojupg.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getRadiusAndStrokeWidthFromDot-B1njTj3P.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./useElementOffset-DSPtK0Is.js";import"./uniqBy-Cc5U2Waj.js";import"./iteratee-ptocMwcL.js";import"./Cross-BrlK3Sp8.js";import"./Rectangle-DbjotOaB.js";import"./util-Dxo8gN5i.js";import"./Sector-vivS8vte.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
