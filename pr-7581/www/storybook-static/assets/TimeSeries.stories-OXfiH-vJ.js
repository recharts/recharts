import{R as e}from"./iframe-Cug8bpW1.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BfPgGv85.js";import{R as h}from"./zIndexSlice-9cZpiRga.js";import{C as g}from"./ComposedChart-Bv2dV5dB.js";import{L as x}from"./Line-B5X5EC2f.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dh_zFLyg.js";import{T as V}from"./Tooltip-Gb3s8MLg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BVOPpVQH.js";import"./Layer-DAaIMucZ.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./Label-C_AgOq8t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_am4wav.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./types-BJnTryYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./throttle-B6lLkzEm.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DxwXXeuL.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./axisSelectors-BKPMDK9R.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./Curve-C1DFTxWC.js";import"./step-DmCiiBno.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6_8UlhB.js";import"./useAnimationId-iyUsFQUM.js";import"./ActivePoints-D2WCNAyw.js";import"./Dot-g0fXnjiJ.js";import"./RegisterGraphicalItemId-D2I1FNOP.js";import"./ErrorBarContext-DaF_EPCk.js";import"./GraphicalItemClipPath-48VFK23w.js";import"./SetGraphicalItem-CCK_hlSi.js";import"./getRadiusAndStrokeWidthFromDot-BrSt3YdC.js";import"./ActiveShapeUtils-CL8eHJZj.js";import"./useElementOffset-ynp9RdRd.js";import"./uniqBy-DrzaFqXi.js";import"./iteratee-DEWmF1v2.js";import"./Cross-BLQUhgMx.js";import"./Rectangle-BkYWDjed.js";import"./util-Dxo8gN5i.js";import"./Sector-DcWuVpie.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
